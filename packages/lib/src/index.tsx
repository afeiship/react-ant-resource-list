// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { Component } from 'react';
import { Button, Card, CardProps, Space } from 'antd';
import { AcTableMain, AcTableMainProps } from '@jswork/antd-components';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import nx from '@jswork/next';

const CLASS_NAME = 'react-ant-resource-list';

declare global {
  interface NxStatic {
    $event: any;
    $nav: any;
  }
}

export type ReactAntResourceListProps = CardProps & {
  name: string;
  lang?: string;
  module?: string;
  columns: any[];
  params?: any;
  tableProps?: Omit<AcTableMainProps, 'name' | 'columns' | 'params'>;
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

  t = (key: string) => {
    const { lang } = this.props;
    return locales[lang!][key] || key;
  };

  get extraView() {
    return (
      <Space>
        <Button size="small" icon={<ReloadOutlined />} onClick={this.reset}>
          {this.t('refresh')}
        </Button>
        <Button size="small" icon={<PlusOutlined />} onClick={this.toAdd}>
          {this.t('add')}
        </Button>
      </Space>
    );
  }

  private reset = () => {
    const { name } = this.props;
    nx.$event?.emit?.(`${name}:reset`);
  };

  private toAdd = () => {
    const { module, name } = this.props;
    nx.$nav?.(`/${module}/${name}/add`);
  };

  // @ts-ignore
  private toEdit = (item: any) => {
    const { module, name } = this.props;
    nx.$nav?.(`/${module}/${name}/edit/${item.id}`);
  };

  render() {
    const { className, module, name, tableProps, params, columns, ...rest } = this.props;

    return (
      <Card
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        extra={this.extraView}
        {...rest}>
        <AcTableMain name={name} columns={columns} params={params} {...tableProps} />
      </Card>
    );
  }
}
