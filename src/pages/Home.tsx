import { useLoaderData, Link } from 'react-router-dom';
import { HomeLoaderData } from '../routes/loaders/homeLoader';

export function Home() {
  console.log('Home re-render');

  const data = useLoaderData() as HomeLoaderData;
  return (
    <>
      <h2>Home</h2>
      <p>Date from loader: {data.date}</p>
      <ul>
        <li>
          <Link to="/posts">Ajax + Loading</Link>
        </li>
        <li>
          <Link to="/counters">useCount(custom hook) + useMemo</Link>
        </li>
        <li>
          <Link to="/use-ref">useRef</Link>
        </li>
        <li>
          <Link to="/use-callback">useCallback + memo</Link>
        </li>
        <li>
          <Link to="/use-swr">useSWR + useAjax(custom hook)</Link>
        </li>
      </ul>
    </>
  );
}
