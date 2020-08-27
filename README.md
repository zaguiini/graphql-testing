This project was bootstrapped with [Davinci CLI](https://github.com/toptal/davinci).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Upgrade to new version of davinci (alpha)

For now this process is not automated and should be tested. It is inspired with react-native CLI and [`upgrade`](https://facebook.github.io/react-native/docs/upgrading#upgrade-based-on-git) command. Idea is to use `git diff` and patches to upgrade applications created with Davinci with latest changes.

For now we can do it manually following next steps (similiar to [RN](https://github.com/react-native-community/rn-diff-purge/blob/master/USAGE.md#alternative-method-using-patch)):

1. Add remote of `davinci` repo:

```
git remote add davinci https://github.com/toptal/davinci.git
git fetch davinci
```

2. Create patch by comparing you current davinci version with latest davinci version

You can find latest `@toptal/davinci` version on [Github](https://github.com/toptal/davinci/tags), and current one in your `package.json`

```
git diff @toptal/davinci@{current-version}..@toptal/davinci@{latest-version} -- ./packages/skeleton > upgrade.patch
```

3. Apply created patch to you project

```
git apply upgrade.patch -p3 --3way
```

4. Resolve conflicts and commit your newly upgraded code
