import { h } from "preact";
import type { V_Plang } from "@plangs/plangs/schema";

type LangProps = {
  pl: Partial<V_Plang>;
};

export function Lang({ pl }: LangProps) {
  return (
    <>
      <nav id="home-nav">{/*Same as Browse, but empty.*/}</nav>
      <article id="lang-page" class="common-content">
        <h1>{pl.name}</h1>

        <div>
          <a href="emmanueloga.com">Link1</a>
          <a href="emmanueloga.com">Link2</a>
          <a href="emmanueloga.com">Link3</a>
        </div>

        <p>
          This is the description of the language. This is more text about the language. Then more text about the
          language. Also we could say more about the language. And more about the language.
        </p>

        <h2>News</h2>
        <ul>
          <li>
            <a href="emmanueloga.com">News 1</a>
          </li>
          <li>
            <a href="emmanueloga.com">News 2</a>
          </li>
          <li>
            <a href="emmanueloga.com">News 3</a>
          </li>
          <li>
            <a href="emmanueloga.com">News 4</a>
          </li>
        </ul>

        <h2>Tooling</h2>
        <p>
          Some languages provide built-in tools like package managers, build tools, linters, etc., while others rely on
          third-party tools to provide these functionalities.
        </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BuildMaster</td>
              <td>build</td>
              <td>Description</td>
              <td>Periquin.com</td>
            </tr>
            <tr>
              <td>Lint-O-Matic</td>
              <td>Lint</td>
              <td>Description</td>
              <td>lolo.com</td>
            </tr>
            <tr>
              <td>Formatter</td>
              <td>Formatter</td>
              <td>Description</td>
              <td>formo.com</td>
            </tr>
          </tbody>
        </table>

        <h2>Recommended Bundles</h2>
        <p>
          We call a bundle a set of tools that work well together. Here are some recommended bundles for this language.
        </p>
        <dl>
          <dt>Bundle 1</dt>
          <dd>
            <p>Description of the bundle.</p>
            <ul>
              <li>Tool 1</li>
              <li>Tool 2</li>
              <li>Tool 3</li>
            </ul>
          </dd>
          <dt>Bundle 2</dt>
          <dd>
            <p>Description of the bundle.</p>
            <ul>
              <li>Tool 1</li>
              <li>Tool 2</li>
              <li>Tool 3</li>
            </ul>
          </dd>
        </dl>

        <h2>Media</h2>
        <div>
          <img src="https://via.placeholder.com/150" alt="Placeholder Image" />
          <img src="https://via.placeholder.com/150" alt="Placeholder Image" />
          <img src="https://via.placeholder.com/150" alt="Placeholder Image" />
        </div>
      </article>
      <nav id="home-side">
        {
          // @ts-ignore: TODO: figure out how to type this.
          h("plang-info", { vid: pl.vid })
        }
      </nav>
    </>
  );
}
