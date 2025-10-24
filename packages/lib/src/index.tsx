// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { Component } from 'react';
import { Button, Card, CardProps, Space } from 'antd';
import { AcTable, AcTableProps } from '@jswork/antd-components';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import nx from '@jswork/next';

const CLASS_NAME = 'react-ant-resource-list';

declare global {
  interface NxStatic {
    $event: any;
  }
}

export type ReactAntResourceListProps = CardProps & {
  name: string;
  lang?: string;
  module?: string;
  columns: any[];
  params?: any;
  tableProps?: Omit<AcTableProps, 'name' | 'columns' | 'params'>;
};

const locales = {
  'zh-CN': {
    refresh: '刷新',
    add: '添加',
  },
  'en-US': {
    refresh: 'Refresh',
    add: 'Create',
  },
};

export default class ReactAntResourceList extends Component<ReactAntResourceListProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    lang: 'zh-CN',
    columns: [],
    module: 'admin',
  };

  private t = (key: string) => {
    const { lang } = this.props;
    return locales[lang!][key] || key;
  };

  get extraView() {
    return (
      <Space>
        <Button size="small" icon={<ReloadOutlined />} onClick={this.handleRefresh}>
          {this.t('refresh')}
        </Button>
        <Button size="small" icon={<PlusOutlined />} onClick={this.handleAdd}>
          {this.t('add')}
        </Button>
      </Space>
    );
  }

  private handleRefresh = () => {
    const { name } = this.props;
    nx.$event?.emit?.(`${name}:reset`);
  };

  private handleAdd = () => {
    const { name } = this.props;
    nx.$event?.emit?.(`${name}:add`);
  };

  render() {
    const { className, module, name, tableProps, params, columns, ...rest } = this.props;

    return (
      <Card
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        extra={this.extraView}
        {...rest}>
        <AcTable name={name} columns={columns} params={params} {...tableProps} />
      </Card>
    );
  }
}
