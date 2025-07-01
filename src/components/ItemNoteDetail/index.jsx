import React from 'react';
import './index.css';
import { Box, Typography, Chip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildIcon from '@mui/icons-material/Build';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const typeConfig = {
    'Maintenance': { color: 'primary', icon: <BuildIcon /> },
    'Collection': { color: 'success', icon: <AttachMoneyIcon /> },
    'Incident': { color: 'warning', icon: <ReportProblemIcon /> },
};

const ItemNoteDetail = ({ note = {}, onDelete }) => {
    if (!note) return null;
    const {
        recordType,
        title,
        route,
        description,
        amount,
        id,
        date,
        time
    } = note;
    const config = typeConfig[recordType] || { color: 'default', icon: null };
    return (
        <Box className="item-note-detail" display="flex" flexDirection="column" mb={2} p={2} borderRadius={2} boxShadow={1}>
            <Box display="flex" alignItems="center" mb={1}>
                <Box mr={1}>{config.icon}</Box>
                <Chip label={recordType} color={config.color} size="small" sx={{ mr: 1 }} />
                <Typography variant="h6" flex={1}>{title}</Typography>
                <IconButton onClick={() => onDelete && onDelete(id)} size="small" color="error">
                    <DeleteIcon />
                </IconButton>
            </Box>
            <Box display="flex" gap={2} mb={1}>
                <Typography variant="body2" color="text.secondary">Route: {route}</Typography>
                <Typography variant="body2" color="text.secondary">Date: {date || '--'}</Typography>
                <Typography variant="body2" color="text.secondary">Time: {time || '--'}</Typography>
            </Box>
            <Typography variant="body2" color="text.primary" mb={1}>{description}</Typography>
            {amount && recordType === 'Collection' && (
                <Typography variant="body2" color="success.main">Amount: ${amount}</Typography>
            )}
        </Box>
    );
};

export default ItemNoteDetail;
