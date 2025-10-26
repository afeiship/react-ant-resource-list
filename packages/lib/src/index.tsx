// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { Component } from 'react';
import { Card, CardProps } from 'antd';
import { AcTable, AcTableExtras, AcTableProps } from '@jswork/antd-components';

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
  hasBack?: boolean;
  tableProps?: Omit<AcTableProps, 'name' | 'columns' | 'params'>;
};

export default class ReactAntResourceList extends Component<ReactAntResourceListProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    lang: 'zh-CN',
    columns: [],
    module: 'admin',
    hasBack: false,
  };

  get extraActions() {
    const { hasBack } = this.props;
    return hasBack ? ['reset', 'add', 'back'] : ['reset', 'add'];
  }

  render() {
    const { className, module, name, tableProps, params, columns, lang, ...rest } = this.props;

    return (
      <Card
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        lang={lang}
        extra={<AcTableExtras lang={lang} name={name} actions={this.extraActions} />}
        {...rest}>
        <AcTable
          bordered
          size="middle"
          name={name}
          module={module}
          columns={columns}
          params={params}
          {...tableProps}
        />
      </Card>
    );
  }
}
