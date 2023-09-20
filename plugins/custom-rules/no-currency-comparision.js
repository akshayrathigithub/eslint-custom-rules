module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Detect the condition "currency === \'INR\'" in JavaScript code'
    }
  },
  create: function (context) {
    return {
      BinaryExpression (node) {
        if (
          node.operator === '===' &&
          (isCurrencyVariable(node.left, 'currency') ||
           isCurrencyVariable(node.right, 'currency'))
        ) {
          context.report({
            node,
            message: 'Avoid using "currency === \'INR\'" condition. Consider refactoring.'
          })
        }
      }
    }

    // Function to check if a node is a variable with the specified name
    function isCurrencyVariable (node, name) {
      return node.type === 'Identifier' && node.name === name
    }
  }
}
