import cx from 'classnames';
import React, { Component, ReactNode } from 'react';
import { Card, CardProps, TableProps } from 'antd';
import { AcCardExtras, AcCardExtrasProps, AcTable, AcTableProps } from '@jswork/antd-components';

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
  header?: ReactNode;
  footer?: ReactNode;
  columns?: TableProps['columns'];
  columnsFields?: TableProps['columns'];
  columnsAction?: AcTableProps['columns'];
  columnsActionParams?: Record<string, any>;
  params?: any;
  paramsAdd?: any;
  paramsEdit?: any;
  hasBack?: boolean;
  cardExtraProps?: Omit<AcCardExtrasProps, 'name' | 'lang'>;
  tableProps?: Omit<
    AcTableProps,
    'name' | 'module' | 'lang' | 'columns' | 'params' | 'paramsAdd' | 'paramsEdit'
  >;
};

export default class ReactAntResourceList extends Component<ReactAntResourceListProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    lang: 'zh-CN',
    columns: [],
    module: 'admin',
    cardExtraProps: {
      actions: ['add', 'reset'],
    },
  };

  get extraView() {
    const { cardExtraProps, name, lang, hasBack } = this.props;
    const { actions } = cardExtraProps ?? {};
    const _actions = hasBack ? ['back', ...(actions || [])] : actions;
    return <AcCardExtras name={name} lang={lang} {...cardExtraProps} actions={_actions} />;
  }

  render() {
    const {
      className,
      module,
      header,
      footer,
      name,
      cardExtraProps,
      tableProps,
      params,
      paramsAdd,
      paramsEdit,
      columns,
      columnsFields,
      columnsAction,
      columnsActionParams,
      lang,
      actions,
      ...rest
    } = this.props;

    return (
      <Card
        data-component={CLASS_NAME}
        className={cx(CLASS_NAME, className)}
        lang={lang}
        extra={this.extraView}
        {...rest}>
        {header}
        <AcTable
          bordered
          size="middle"
          name={name}
          lang={lang}
          module={module}
          columns={columns}
          columnsFields={columnsFields}
          columnsAction={columnsAction}
          columnsActionParams={columnsActionParams}
          params={params}
          paramsAdd={paramsAdd}
          paramsEdit={paramsEdit}
          {...tableProps}
        />
        {footer}
      </Card>
    );
  }
}
