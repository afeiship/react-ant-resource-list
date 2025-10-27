import ReactAntResourceList from '@jswork/react-ant-resource-list/src/main';
import '@jswork/react-ant-resource-list/src/style.scss';
import nx from '@jswork/next';

nx.set(nx, '$api', {
  posts_index: async (payload) => {
    console.log('payload: ', payload);
    const res = await fetch(
      `https://68f5fcf26b852b1d6f15b6f3.mockapi.io/api/v1/posts?page=${payload.page}&limit=${payload.size}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    ).then((response) => response.json());

    return {
      rows: res,
      total: 16,
    };
  },
});

function App() {
  const columns = [
    { title: 'ID', dataIndex: 'id', width: 80 },
    { title: 'Title', dataIndex: 'title', width: 200 },
    { title: 'Content', dataIndex: 'content', width: 200 },
  ];
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">Build Time: {BUILD_TIME}</div>
      <ReactAntResourceList title="文章列表" name="posts" columns={columns} actions={['add']} />
    </div>
  );
}

export default App;
