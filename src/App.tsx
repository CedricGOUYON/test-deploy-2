import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, alias doloremque non vero omnis adipisci fugit quibusdam provident autem explicabo reprehenderit officiis, tempore eum, nam facilis! Ratione qui adipisci laudantium dolor obcaecati doloremque mollitia soluta eum saepe non itaque consequatur fuga accusantium, quod, optio numquam dicta. Atque fugit ipsa laudantium temporibus provident autem nemo rerum earum repudiandae magni quibusdam repellendus esse aut consequuntur asperiores ad, repellat quas deserunt soluta. Aut velit omnis, natus exercitationem cupiditate molestiae sunt quam illo similique veritatis! Iure, blanditiis labore distinctio molestias aliquid accusamus aperiam, sapiente iste itaque veniam, possimus est repellat harum nihil ullam voluptatem quibusdam dolores sint expedita quam. Iusto dolorum porro amet maiores ullam officiis vitae dolor, cupiditate quam soluta autem deleniti doloribus nobis, vel repellendus quo. Minima autem recusandae eligendi molestias cum cupiditate asperiores, sapiente nostrum quod.</p>
        <br />
        <p>Voluptatem tempora vero, inventore tenetur assumenda sapiente maiores fuga incidunt doloremque, repellat quidem dolorum voluptatibus reprehenderit cupiditate! Quis doloribus quasi numquam iste possimus sed molestiae optio perspiciatis assumenda dolorem quo, quae tenetur repellat labore inventore est asperiores, voluptatibus cupiditate, voluptatum totam nobis ducimus deleniti. Cum earum odio et a tempora ducimus harum deserunt natus id eius, asperiores molestiae saepe quaerat quibusdam ipsa qui vel cupiditate tenetur animi totam inventore repellendus quasi eos pariatur? Deleniti iste consectetur, deserunt ad reiciendis harum ab, nulla earum dicta obcaecati voluptates, similique id magnam accusamus nobis? Debitis amet quod blanditiis ab, ratione sed nulla sint perspiciatis exercitationem inventore, error aliquam. Repudiandae pariatur eligendi temporibus ipsam incidunt laudantium commodi doloribus molestiae ut recusandae? Suscipit sint, nihil quis maiores voluptatibus, quo voluptas nam quod aliquam omnis nesciunt dignissimos soluta doloremque minima assumenda velit incidunt at reiciendis atque dicta corporis porro itaque magnam! Libero tenetur voluptatem error molestias amet asperiores nesciunt perferendis! Facilis perspiciatis tenetur mollitia neque eum magnam illo! Quibusdam, assumenda autem.</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
