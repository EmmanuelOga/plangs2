export function About() {
  return (
    <>
      <div />
      <article id="about" class="common-content">
        <h2>What is Plangs?</h2>
        <p>
          Plangs is a website dedicated to aggregating and curating information about a wide variety of programming
          languages.
        </p>
        <h2>Community Contribution</h2>
        <p>
          The initial data for Plangs was scraped from Wikipedia infoboxes on programming languages. While Wikipedia
          offers a rich repository of information, not all programming languages have dedicated pages!
        </p>
        <p>
          We manually update the entries for each programming language and tool and gladly accept contributions from
          the community.
        </p>
        <p>
          If you find any mistakes or want to submit new information, please feel free to open a pull request on our
          GitHub repository.
        </p>
        <h2>Static Website and Baked Data</h2>
        <p>
          Plangs is built as a static website. All the data on our site is available as a JSON file, following the
          "baked data" pattern inspired by
          <a href="https://simonwillison.net/2021/Jul/28/baked-data/">Simon Willison's Baked Data Pattern</a>.
        </p>
        <h2>License</h2>
        <p>
          Plangs © 2024 by <a href="https://emmanueloga.com">Emmanuel Oga</a> is licensed under
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0 </a>.
        </p>
        <h3>Thank you for your visit!</h3>
      </article>
      <div />
    </>
  );
}
