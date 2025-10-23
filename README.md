# react-ant-resource-list
> Antd resource list.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-resource-list
```

## usage
  ```js
  import ReactAntResourceList from '@jswork/react-ant-resource-list';
  import '@jswork/react-ant-resource-list/dist/style.scss';
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
        <ReactAntResourceList title="文章列表" name="posts" columns={columns} />
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-ant-resource-list/

## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-resource-list/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-resource-list
[version-url]: https://npmjs.org/package/@jswork/react-ant-resource-list

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-resource-list
[license-url]: https://github.com/afeiship/react-ant-resource-list/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-resource-list
[size-url]: https://github.com/afeiship/react-ant-resource-list/blob/master/dist/react-ant-resource-list.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-resource-list
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-resource-list
