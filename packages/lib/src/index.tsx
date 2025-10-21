// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { Component } from 'react';
import { Card, CardProps } from 'antd';
import { AcTableMain, AcTableMainProps } from '@jswork/antd-components';

const CLASS_NAME = 'react-ant-resource-list';

export type ReactAntResourceListProps = CardProps & {
  name: string;
  columns: any[];
  params?: any;
  tableProps?: Omit<AcTableMainProps, 'name' | 'columns' | 'params'>;
};

export default class ReactAntResourceList extends Component<ReactAntResourceListProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    columns: [],
  };

  render() {
    const { className, name, tableProps, params, columns, ...rest } = this.props;

    return (
      <Card data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest}>
        <AcTableMain name={name} columns={columns} params={params} {...tableProps} />
      </Card>
    );
  }
}
