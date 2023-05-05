import React from "react";

const Blog = () => {


  
  return (
    <div>

<div className="border m-10 p-10 rounded-lg">
      <h4 className="text-3xl mb-10 ">Here are some question-answer.</h4>
      <div className="my-10 mx-5">
        <h4 className="text-2xl font-bold mb-5">1. Difference between uncontrolled and controlled component.</h4>
        <p>
          a controlled component is a React component that is managed by its
          parent component, while an uncontrolled component is a component that
          manages its own state.
          <br />
          With a controlled component, the parent component has full control
          over the component's state and can change it at any time by passing
          new props to it. The controlled component doesn't have its own
          internal state, and its behavior is entirely determined by the parent
          component.
          <br />
          On the other hand, with an uncontrolled component, the component
          manages its own state, and the parent component has no direct control
          over it. The uncontrolled component can update its state internally
          based on user input, and the parent component can access the
          component's state only through a ref.
          <br />
          In general, controlled components are easier to reason about and test,
          as their behavior is predictable and deterministic. However,
          uncontrolled components can be more convenient in certain situations,
          such as when you need to handle user input without managing state in
          the parent component.
        </p>
      </div>
      <div className="my-10 mx-5">
        <h4 className="text-2xl font-bold mb-5">2. How to validate react props using probTypes?</h4>
        <p>
          PropTypes is a feature in React that allows you to validate the props
          being passed to a component, ensuring that they meet the expected type
          and format. This is important because it can help prevent errors and
          make debugging easier by catching issues early on in development.
          <br />
          To use PropTypes, you first need to import the PropTypes library from
          the 'prop-types' package. Then, you can define the expected props for
          your component using the propTypes object. This object should be
          defined as a static property of your component class.
          <br />
          Within the propTypes object, you can specify the expected type for
          each prop using one of the many PropTypes validators provided by the
          PropTypes library. For example, you can use PropTypes.string to ensure
          that a prop is a string, or PropTypes.number to ensure that it's a
          number. You can also specify that a prop is required by adding
          .isRequired to the end of the validator.
          <br />
          Once you've defined the propTypes for your component, React will
          automatically validate the props passed to it against the propTypes
          you have defined. If a prop doesn't match the expected type or is
          missing when it's required, React will throw a warning in the console.
          <br />
          Using PropTypes can help make your code more reliable and easier to
          maintain by providing a way to catch errors early on in the
          development process.
        </p>
      </div>
      <div className="my-10 mx-5">
        <h4 className="text-2xl font-bold mb-5">3. Difference between node.js and express.js</h4>
        <p>
          Node.js and Express.js are both popular technologies used in web
          development, but they have different roles.
          <br />
          Node.js is a server-side JavaScript runtime environment that allows
          developers to run JavaScript code on the server. This means that
          developers can write server-side code in the same language as the
          client-side code, which is often written in JavaScript using
          frameworks like React or Angular. Node.js is designed to be fast,
          efficient, and scalable, making it a popular choice for building web
          servers and other server-side applications.
          <br />
          Express.js, on the other hand, is a framework built on top of Node.js
          that provides a set of tools and features for building web
          applications and APIs. Express.js simplifies the process of building
          web applications by providing middleware, which are functions that can
          be used to handle requests and responses, and routing, which allows
          developers to define how different parts of an application should
          handle incoming requests.
          <br />
          In simple terms, Node.js provides the foundation for building
          server-side applications in JavaScript, while Express.js provides a
          set of tools and features to make it easier to build web applications
          and APIs on top of Node.js.
          <br />
          To summarize, Node.js is a runtime environment for executing
          JavaScript code on the server, while Express.js is a framework built
          on top of Node.js that provides a set of tools and features for
          building web applications and APIs.
        </p>
      </div>
      <div className="my-10 mx-5">
        <h4 className="text-2xl font-bold mb-5">What is custom hook and why will you create a custom hook?</h4>
        <p>
          A custom hook in React is a reusable piece of stateful logic that is
          extracted from a component and defined as a standalone function.
          Custom hooks are typically created when you find yourself duplicating
          the same logic across multiple components or when you need to share
          stateful logic between unrelated components.
          <br />
          To create a custom hook, you start by defining a function that uses
          one or more of the existing React hooks, such as useState, useEffect,
          or useContext. You can then use this function as a hook in your
          component by calling it with the appropriate parameters.
          <br />
          Custom hooks can be used to encapsulate complex logic and make it
          easier to reuse and maintain. They can also help to make your code
          more readable and modular by separating concerns and reducing the
          amount of code duplication.
          <br />
          Custom hooks follow the same rules as regular hooks, which means they
          must start with the word "use" and can only be called at the top level
          of a component or another hook. Custom hooks can also be tested in
          isolation using React's testing library, just like regular hooks and
          components.
          <br />
          Overall, custom hooks are a powerful feature of React that allow you
          to reuse stateful logic between components and make your code more
          modular and maintainable.
        </p>
      </div>
    </div>

    </div>
  );
};

export default Blog;
