import useSWR from 'swr';
import { useAjax } from '../lib/ajax';

export const UseSWR: React.FC = () => {
  const { get } = useAjax({ showLoading: true, handleError: false });
  const { data, error } = useSWR('/api/v1/works/search', async (path) => {
    // 如果返回 403 就让用户先登录
    const response = await get(path);
    return response.data;
  });

  console.log('data', data);
  console.log('error', error);

  return <div>UseSWR</div>;
};
