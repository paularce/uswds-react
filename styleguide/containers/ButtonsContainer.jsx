import React from "react";
import Label from '../../lib/components/Label';
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../lib/components/Tables';
import Button from "../../lib/components/Button";

/**
 * Buttons content
 * @returns {node} node
 */
export default function ButtonsContainer () {
  return (
    <DocsPage title="Buttons">
      
      {/* Importing */}
      <DocsSection title="Importing">
        <Highlight language="javascript">
          {`import Button from "../lib/components/Button";`}
        </Highlight>
      </DocsSection>

      {/* Props */}
      <DocsSection title="Props">
        <Table columns={['Prop', 'Type', 'Default', 'Description']}>
          <TableRow>
            <TableHeaderCell>text  <Label>Required</Label></TableHeaderCell>
            <TableCell>string</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>disabled</TableHeaderCell>
            <TableCell>bool</TableCell>
            <TableCell>false</TableCell>
            <TableCell>If true, makes button disabled</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>onClick</TableHeaderCell>
            <TableCell>func</TableCell>
            <TableCell>&nbsp;</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>size</TableHeaderCell>
            <TableCell>oneOf ['', 'Button.SIZE_BIG']</TableCell>
            <TableCell>''</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>status</TableHeaderCell>
            <TableCell>oneOf [''', Button.STATUS_ACTIVE, Button.STATUS_HOVER']</TableCell>
            <TableCell>''</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
        </Table>
      </DocsSection>

      {/* Usage */}
      <DocsSection title="Usage">
        <DocsExample>
          <DocsPreview>
            <h6>Primary Buttons</h6>
            <div className="button_wrapper">
              <Button text={'Default'} />
              <Button text={'Active'} status={Button.STATUS_ACTIVE} />
              <Button text={'Hover'} status={Button.STATUS_HOVER} />
            </div>
            <h6>Disabled Button</h6>
            <div className="button_wrapper">
              <Button text={'Default'} status={Button.STATUS_DISABLED} />
            </div>
            <h6>Big Button</h6>
            <div className="button_wrapper">
              <Button text={'Default'} size={Button.SIZE_BIG} />
            </div>
          </DocsPreview>
          <Highlight className="html">
{`<h6>Primary Buttons</h6>
<div className="button_wrapper">
  <Button text={'Default'} />
  <Button text={'Active'} status={Button.STATUS_ACTIVE} />
  <Button text={'Hover'} status={Button.STATUS_HOVER} />
</div>
<h6>Disabled Button</h6>
<div className="button_wrapper">
  <Button text={'Default'} status={Button.STATUS_DISABLED} />
</div>
<h6>Big Button</h6>
<div className="button_wrapper">
  <Button text={'Default'} size={Button.SIZE_BIG} />
</div>`}
          </Highlight>
        </DocsExample>
      </DocsSection>
    </DocsPage>
  );
}
