// const path = require("path")
// const slash = require("slash")

// exports.createPages = ({ graphql, actions}) => {
//   const {createPage}= actions;

//   return graphql (
//     ` {
//       allContentfulFeatureCard{
//         edges{
//           node{
//             title
//           }
//         }
//       }
//     }`
//   ).then(result) => {
//     if(result.errors) {
//       console.log("Error with contentful data", result.errors)
//     }

//     const featureCardTemplate = path.resolve('./src/templates/featureCard.js')

//     // // result.data.allContentfulFeatureCard.edges.forEach( title => {
//     // //   createPage({
//     // //     path=
//     // //   })
//     // })
//   }
// }