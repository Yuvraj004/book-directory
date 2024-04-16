const myMiddleware = (req, res, next) => {
    console.log('This is my custom middleware!');
  
    next(); // Move on to the next middleware or route handler
  };
  
module.exports = myMiddleware;
  