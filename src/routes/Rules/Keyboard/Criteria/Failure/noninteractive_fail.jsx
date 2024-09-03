import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function NonInteractiveFailures() {
  return (
    <>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Non-interactive elements with tabindex="0"
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Failure Examples
              </Typography>
              <Divider sx={{ mb: 2 }}></Divider>
              <ul>
                <li class="list-item">
                  <p tabindex="0">Paragraph</p>
                </li>
                <li class="list-item">
                  <h2 tabindex="0">Heading 2</h2>
                </li>
                <li class="list-item">
                  <h3 tabindex="0">Heading 3</h3>
                </li>
                <li class="list-item">
                  <section tabindex="0">
                    <h4>A Section</h4>
                    <p>
                      This is a section with a heading and a paragraph inside.
                    </p>
                  </section>
                </li>
                <li class="list-item">
                  <article tabindex="0">
                    <h5>An Article</h5>
                    <p>
                      This is an article with a heading and a paragraph inside.
                    </p>
                  </article>
                </li>
                <li class="list-item">
                  <aside tabindex="0">An Aside</aside>
                </li>
                <li class="list-item">
                  <figure tabindex="0">A Figure</figure>
                </li>
                <li class="list-item">
                  <footer tabindex="0">A Footer</footer>
                </li>
                <li class="list-item">
                  <header tabindex="0">A Header</header>
                </li>
                <li class="list-item">
                  <main tabindex="0">Main Content</main>
                </li>
                <li class="list-item">
                  <nav tabindex="0">Navigation</nav>
                </li>
                <li class="list-item">
                  <table class="table" tabindex="0">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>john.doe@example.com</td>
                    </tr>
                  </table>
                </li>
                <li class="list-item">
                  <blockquote tabindex="0">
                    A long quotation from a notable source
                  </blockquote>
                </li>
                <li class="list-item">
                  <code tabindex="0">let x = 10;</code>
                </li>
                <li class="list-item">
                  <pre tabindex="0">const y = 20;\nlet z = x + y;</pre>
                </li>
                <li class="list-item">
                  <time datetime="2023-07-09" tabindex="0">
                    July 9, 2023
                  </time>
                </li>
                <li class="list-item">
                  <mark tabindex="0">Highlighted text</mark>
                </li>
                <li class="list-item">
                  <progress value="70" max="100" tabindex="0"></progress>
                  <span> 70% completed</span>
                </li>
                <li class="list-item">
                  <meter value="2" min="0" max="10" tabindex="0"></meter>
                  <span> 2 out of 10</span>
                </li>
              </ul>

              <Grid item xs={12}>
                <Stack direction="row" spacing={1}></Stack>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
