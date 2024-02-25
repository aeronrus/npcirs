import React from 'react';
import { Link } from 'react-router-dom';

const CustomLinkCell = ({ row, field }) => <Link to={`/card/${row.id}`}>{row[field]}</Link>;

export default CustomLinkCell;
