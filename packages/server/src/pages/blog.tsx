import type { BlogPost } from "../blog";

type BlogProps = {
  posts: BlogPost[];
};

export function Blog({ posts }: BlogProps) {
  const content = posts.map(({ path, html, date, title }) => {
    const key = path.replace(/.md$/, "");
    return (
      <article class="blog-post" key={key}>
        <h2 id={key} class="post-title">
          <a href={`#${key}`}>{title}</a>
        </h2>
        <div class="post-date">Posted on {date}</div>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: html of the blog post. */}
        <div class="post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    );
  });

  return (
    <>
      <div />
      <article id="blog-page" class="common-content">
        {content}
      </article>
      <div />
    </>
  );
}
