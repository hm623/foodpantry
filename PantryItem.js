// components/PantryItem.js
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const PantryItem = ({ id, name, quantity }) => {
  const handleDelete = async () => {
    await deleteDoc(doc(db, 'pantry', id));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">Quantity: {quantity}</Typography>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default PantryItem;
