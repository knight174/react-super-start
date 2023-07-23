import { Link, Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/counters">Counters</Link>
          </li>
          {/* <li>
            <Link to="/deferred">Deferred</Link>
          </li> */}
          {/* <li>
            <Link to="/404">404 Link</Link>
          </li> */}
          {/* <li>
            <button onClick={() => revalidator.revalidate()}>
              Revalidate Data
            </button>
          </li> */}
        </ul>
        <div>
          <ul>
            <li>
              <Link to="/sign_in">Sign in</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
