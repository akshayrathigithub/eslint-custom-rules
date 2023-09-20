module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Warn if currency prop value is hardcoded in Amount component'
    }
  },
  create: function (context) {
    return {
      JSXOpeningElement (node) {
        const componentName = node.name.name

        if (componentName === 'Amount') {
          const currencyAttribute = node.attributes.find(
            (attr) =>
              attr.type === 'JSXAttribute' && attr.name.name === 'currency'
          )

          if (currencyAttribute) {
            if (currencyAttribute.value.type === 'Literal' && currencyAttribute.value.value === 'INR') {
              context.report({
                node,
                message: 'Avoid hardcoding "INR" as the currency prop value in the Amount component.'
              })
            }
          }
        }
      }
    }
  }
}
