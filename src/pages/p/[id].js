import prisma from "../../../lib/prisma";

export async function getServerSideProps({ params }) {

  const { id } = params;

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id).toString()
    },
    include: {
      author: {
        select: { name: true }
      }
    }
  });

  return {
    props: post
  };
}

export default function Post(props) {

  return (
    <div>

      <h2>{props.title}</h2>

      <p>{props.content}</p>

    </div>
  )

}