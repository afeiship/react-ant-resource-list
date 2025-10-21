// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, Component } from 'react';
import { Card, CardProps } from 'antd';
import { AcTableMain } from '@jswork/antd-components';

const CLASS_NAME = 'react-ant-resource-list';

export type ReactAntResourceListProps = CardProps & {
  name: string;
  columns: any[];
};

export default class ReactAntResourceList extends Component<ReactAntResourceListProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    columns: [],
  };

  render() {
    const { className, name, columns, ...rest } = this.props;
    return (
      <Card
        title="List"
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        {...rest}>
        <AcTableMain name={name} columns={columns} />
      </Card>
    );
  }
}
