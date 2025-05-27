# bug-bounty-challenge

Created with CodeSandbox

Hello,

All bugs have been resolved. However, when cloning the project and working locally, there are some errors that cause an invisible iframe (overlay) to prevent interaction with the view.

This iframe is the React error overlay, which is supposed to display errors. In this case, it is not appearing as expected. This issue can be fixed by adding the overlay-error package with the following command:

npm i -D react-error-overlay@6.0.9

However, the errors now displayed in the overlay still need to be addressed (I assumed this was not part of the test).

To resolve this, it may be necessary to update TypeScript or another package. For testing purposes, I inspected the DOM and manually removed the overlay to test the language feature.

I guess this works correctly on codesandbox.
