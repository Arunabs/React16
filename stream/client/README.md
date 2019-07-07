This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### React Router

command to install the react router

```
npm install --save react-router-dom
```

######To use google JS api inclued below link in your html file.
Google doesn't provide the npm package for this one.

<script src="https://apis.google.com/js/api.js"></script>

library can accessed using gapi

```
npm install --save redux react-redux
```

###redux dev tools :

https://github.com/zalmoxisus/redux-devtools-extension

### debug_session

http://localhost:3000?debug_session="efjhgj"
to keep the debug history even after the refresh we use ?debug_session= any string

http://localhost:3000/?debug_session=%22ertregt%27

Redux Form Version Issue
As of March 22 2019, the maintainer of Redux Form seems to have accidentally rolled back to an extremely out of date version:

https://github.com/erikras/redux-form/releases

To work around this, we need to install a specific version which is the latest known good release:

npm install redux-form@8.1.0
If you already have Redux Form installed you may also have to delete your node_modules and package-lock.json file and re-run npm install after changing to v8.1.0 in your package.json file.

UPDATE: There are many bugs in Redux Form v8.2.0 so for now we would still suggest using the above mentioned version.

### how to run this project

1.To run server
go to /stream/api in terminal and run below command to up the server

```
npm start
```

2. To run client
   go to stream/client in terminal and run below command to up the client server

   ```
   npm start
   ```

```

### Redux forms

```

npm install --save redux-form

```

documentaion > redux-form.com
pick the reducer from the redux form and connect it to combineReducers
import {reducer} from 'redux-form';

History Object Deprecation Warning
In the next lecture we are going to be creating our history object. As of React Router DOM v4.4.0 you will get a warning in your console:

Warning: Please use `require("history").createBrowserHistory` instead of `require("history/createBrowserHistory")`. Support for the latter will be removed in the next major release.

To fix, our history.js file should instead look like this:

import { createBrowserHistory } from 'history';
export default createBrowserHistory();
Thanks to Torleif B. for finding this bug and providing the fix!

Below warning message will be displayed when use pass the our manualy created history object to BrowserRouter as props
Warning: <BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`

ex:

```

<BrowserRouter history={history}>
```

So in this case we user Router instead of BrowserRouter.
We are creating manual router to handle programmaticaly so we use Plain Route insted of BrowserRouter

ex:

```
import {Router} from "react-router-dom";

<Router history={history}>
```

### Url parameter configuration

Adding at Route level to get the value in the props params
ex:

```
<Route path="/streams/edit/:id" component={streamEdit} />
```

user can configure single value or multiple value in the route.

ex: single value

```
  <Router history={history}>
        <Header />
        <div>
          <Route path="/" exact component={streamList} />
          <Route path="/streams/edit/:id" component={streamEdit} />
          <Route path="/streams/delete" component={streamDelete} />
          <Route path="/streams/show" component={streamShow} />
          <Route path="/streams/create" component={streamCreate} />
        </div>
</Router>
```

ex: multiple values

```
<Router history={history}>

<Header />
<div>
<Route path="/" exact component={streamList} />
<Route path="/streams/edit/:id/:name/:age" component={streamEdit} />
<Route path="/streams/delete" component={streamDelete} />
<Route path="/streams/show" component={streamShow} />
<Route path="/streams/create" component={streamCreate} />
</div>
</Router>
```

### React redux form

```
import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  // getInput(fieldProps) {
  //   return <input {...fieldProps.input} />;
  // }
  getRenderError = meta => {
    if (meta.touched && meta.error) {
      return <div className="ui error message">{meta.error}</div>;
    }
  };

  getInput = ({ input, label, meta }) => {
    //console.log(meta);
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.getRenderError(meta)}
      </div>
    );
  };
  resetForm = () => {
    this.props.reset();
  };

  render() {
    console.log("test", this.props);
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.formSubmit)}
      >
        <Field name="title" component={this.getInput} label="Enter Name" />
        <Field
          name="description"
          component={this.getInput}
          label="Enter Description"
        />
        <button className="ui button primary" onClick={this.resetForm}>
          Reset
        </button>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = formValues => {
  let error = {};
  if (!formValues.title) {
    error.title = "Must enter the title";
  }
  if (!formValues.description) {
    error.description = "Must enter the description";
  }
  return error;
};
// just exporting the redux form
export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);

```

### React redux form

example for redux form and connect using together

```
import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";

import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  // getInput(fieldProps) {
  //   return <input {...fieldProps.input} />;
  // }
  getRenderError = meta => {
    if (meta.touched && meta.error) {
      return <div className="ui error message">{meta.error}</div>;
    }
  };

  getInput = ({ input, label, meta }) => {
    //console.log(meta);
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.getRenderError(meta)}
      </div>
    );
  };
  resetForm = () => {
    this.props.reset();
  };
  formSubmit = formValues => {
    //console.log("fromValues", formValues);

    this.props.createStream(formValues);
  };
  render() {
    console.log("test", this.props);
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.formSubmit)}
      >
        <Field name="title" component={this.getInput} label="Enter Name" />
        <Field
          name="description"
          component={this.getInput}
          label="Enter Description"
        />
        <button className="ui button primary" onClick={this.resetForm}>
          Reset
        </button>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = formValues => {
  let error = {};
  if (!formValues.title) {
    error.title = "Must enter the title";
  }
  if (!formValues.description) {
    error.description = "Must enter the description";
  }
  return error;
};
// exporting the redux form with connet
const formWrapped = reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
export default connect(
  null,
  { createStream }
)(formWrapped);

```
