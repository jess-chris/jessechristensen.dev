// import prisma from "../../lib/prisma";

// export async function getStaticProps() {

//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });

//   return {
//     props: { feed },
//     revalidate: 10
//   };
// }

export default function Blog(props) {

//   return (
//     <div id='recent-posts'>

//     {props.feed.map((post) => {

//       return (
//         <h3 key={post.id}>{post.title} - {post.author.name}</h3>
//       )

//     })}

//     </div>
//   )

}