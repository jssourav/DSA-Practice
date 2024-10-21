# SOLID Principles with React Examples

In this document, we will cover the **SOLID** principles and provide React-only examples to explain how each principle can be applied in a React application.

## 1. Single Responsibility Principle (SRP)

**Definition**: A class (or component) should have only one responsibility, meaning it should have only one reason to change.

### Example of SRP Violation

Here, we have a `UserProfile` component that does too much: it renders user data and also fetches the user data. This violates SRP because the component is responsible for both **UI rendering** and **data fetching**.

```javascript
function UserProfile() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/user")
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
} 
```

### SRP Compliant Example
Now, we separate the concerns. The UserProfile component is only responsible for rendering, while the useUserData hook handles the data fetching.

```javascript
// Custom Hook for fetching user data (separation of concern)
function useUserData() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/user")
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return user;
}

// SRP Compliant UserProfile Component
function UserProfile() {
  const user = useUserData();

  return (
    <div>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

```

## 2. Open/Closed Principle (OCP)

**Definition:** Software entities (classes, modules, functions) should be open for extension but closed for modification.

### Example of OCP Violation
The `Alert` component requires modification every time a new alert type is added.

```javascript
function Alert({ type, message }) {
  let alertStyle = {};

  if (type === "success") {
    alertStyle = { color: "green" };
  } else if (type === "error") {
    alertStyle = { color: "red" };
  }

  return <div style={alertStyle}>{message}</div>;
}

```
### OCP Compliant Example
We can adhere to the OCP by allowing the component to be extended with new types without modifying the `Alert` component itself.

```javascript
const alertStyles = {
  success: { color: "green" },
  error: { color: "red" },
};

function Alert({ type, message }) {
  const alertStyle = alertStyles[type] || {};
  return <div style={alertStyle}>{message}</div>;
}

```
Now, adding new alert types is as simple as extending the `alertStyles` object, rather than modifying the `Alert` component.

## 3. Liskov Substitution Principle (LSP)

**Definition:** Objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program.

### Example of LSP Violation
Here, the ErrorNotification breaks the LSP because it requires an additional errorCode prop that the base Notification component doesn't expect.

```javascript
function Notification({ message }) {
  return <div>{message}</div>;
}

function ErrorNotification({ message, errorCode }) {
  return (
    <div>
      <h1>Error {errorCode}</h1>
      <p>{message}</p>
    </div>
  );
}

// Using the components
function App() {
  return (
    <div>
      <Notification message="Everything is fine!" />
      <ErrorNotification message="Something went wrong!" errorCode={500} />
    </div>
  );
}
```
### LSP Compliant Example
To comply with LSP, both `Notification` and `ErrorNotification` should follow the same interface. If we want to display error details, we should enhance the `Notification` component instead of creating a subclass that deviates from the base class behavior.

```javascript
function Notification({ message, errorCode }) {
  return (
    <div>
      {errorCode ? <h1>Error {errorCode}</h1> : null}
      <p>{message}</p>
    </div>
  );
}

// Using the components
function App() {
  return (
    <div>
      <Notification message="Everything is fine!" />
      <Notification message="Something went wrong!" errorCode={500} />
    </div>
  );
}
```

Now, the Notification component can be used uniformly for both regular notifications and error notifications without violating LSP.

## 4. Interface Segregation Principle (ISP)
**Definition:** Clients should not be forced to depend on interfaces they do not use. Instead of one large interface, split it into smaller, more specific interfaces.

### Example of ISP Violation
In this example, the `Profile` component tries to serve both regular users and admin users by handling both regular user data and admin-specific actions. This violates ISP because regular users don't need the admin functionality.

```javascript
function Profile({ userType, name, email, manageUsers, viewReports }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      {userType === "admin" && (
        <>
          <button onClick={manageUsers}>Manage Users</button>
          <button onClick={viewReports}>View Reports</button>
        </>
      )}
    </div>
  );
}
```

### ISP Compliant Example
To adhere to ISP, we separate the concerns into different components: `UserProfile` for regular users and `AdminProfile` for admins.

```javascript
// User Profile component (for regular users)
function UserProfile({ name, email }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

// Admin Profile component (for admins)
function AdminProfile({ name, email, manageUsers, viewReports }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <button onClick={manageUsers}>Manage Users</button>
      <button onClick={viewReports}>View Reports</button>
    </div>
  );
}

// Using the components
function App() {
  return (
    <div>
      <UserProfile name="John Doe" email="john@example.com" />
      <AdminProfile
        name="Admin User"
        email="admin@example.com"
        manageUsers={() => console.log("Managing users")}
        viewReports={() => console.log("Viewing reports")}
      />
    </div>
  );
}
```
Now, regular users and admins use different components, which adhere to their specific needs, following ISP.

## 5. Dependency Inversion Principle (DIP)
**Definition:** High-level modules should not depend on low-level modules. Both should depend on abstractions.

### Example of DIP Violation
Here, the `PaymentProcessor` component is directly dependent on the `PayPalPaymentService`, violating DIP.

```javascript
function PayPalPaymentService() {
  return {
    processPayment: (amount) => {
      console.log("Processing PayPal payment of $" + amount);
    },
  };
}

function PaymentProcessor({ amount }) {
  const payPalService = PayPalPaymentService();

  return (
    <button onClick={() => payPalService.processPayment(amount)}>
      Pay with PayPal
    </button>
  );
}

function App() {
  return <PaymentProcessor amount={100} />;
}
```
### DIP Compliant Example
We can refactor the `PaymentProcessor` component to depend on an abstraction (`paymentService`) rather than a specific implementation, allowing for easier extension.

```javascript
function PayPalPaymentService() {
  return {
    processPayment: (amount) => {
      console.log("Processing PayPal payment of $" + amount);
    },
  };
}

function StripePaymentService() {
  return {
    processPayment: (amount) => {
      console.log("Processing Stripe payment of $" + amount);
    },
  };
}

function PaymentProcessor({ amount, paymentService }) {
  return (
    <button onClick={() => paymentService.processPayment(amount)}>
      Process Payment
    </button>
  );
}

function App() {
  const payPalService = PayPalPaymentService();
  const stripeService = StripePaymentService();

  return (
    <div>
      <h1>PayPal Payment</h1>
      <PaymentProcessor amount={100} paymentService={payPalService} />

      <h1>Stripe Payment</h1>
      <PaymentProcessor amount={200} paymentService={stripeService} />
    </div>
  );
}
```
Now, the `PaymentProcessor` is no longer tied to a specific payment service and can work with any payment provider, adhering to DIP.