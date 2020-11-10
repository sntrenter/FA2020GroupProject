import React, { useState } from 'react';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    msg: {
      subject: 'Did not complete questionnaire'
    },
    createdAt: "1/2/2020",
    status: 'non-urgent'
  },
  {
    id: uuid(),
    msg: {
      subject: 'Reported symptoms'
    },
    createdAt: "2/20/2020",
    status: 'urgent'
  },
  {
    id: uuid(),
    msg: {
      subject: 'Reported symptoms'
    },
    createdAt: "2/22/2020",
    status: 'urgent'
  },
  {
    id: uuid(),
    msg: {
      subject: 'No exercise reported'
    },
    createdAt: "4/13/2020",
    status: 'non-urgent'
  },
  {
    id: uuid(),
    msg: {
      subject: 'Reported mood: poor'
    },
    createdAt: "6/14/2020",
    status: 'non-urgent'
  },
  {
    id: uuid(),
    msg: {
      subject: 'Reported symptoms'
    },
    createdAt: "6/14/2020",
    status: 'urgent'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const Messages = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Messages" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                
                <TableCell>
                  Subject
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((mes) => (
                <TableRow
                  hover
                  key={mes.id}
                >
                
                  <TableCell>
                    {mes.msg.subject}
                  </TableCell>
                  <TableCell>
                    {mes.createdAt}
                  </TableCell>
                  <TableCell>  
                    {mes.status === 'urgent' ? 
                    <Chip
                      color="primary"
                      label={mes.status}
                      size="small"
                    /> : 
                    mes.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

Messages.propTypes = {
  className: PropTypes.string
};

export default Messages;