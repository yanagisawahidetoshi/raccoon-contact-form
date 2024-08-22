"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
  Box,
} from "@mui/material";

type TContact = {
  id: number;
  name: string;
  email: string;
  isEditing: boolean;
};

const ContactList: React.FC<{
  contacts: TContact[];
  onSave: (
    id: number,
    updatedContact: Omit<TContact, "id" | "isEditing">
  ) => void;
  onCancel: (id: number) => void;
}> = ({ contacts, onSave, onCancel }) => {
  const [editingName, setEditingName] = useState("");
  const [editingEmail, setEditingEmail] = useState("");

  const handleSave = (id: number) => {
    onSave(id, { name: editingName, email: editingEmail });
    setEditingName("");
    setEditingEmail("");
  };

  return (
    <List>
      {contacts.map((contact) =>
        contact.isEditing ? (
          <ListItem key={contact.id}>
            <TextField
              label="名前"
              value={editingName}
              onChange={(e) => setEditingName(e.target.value)}
              variant="outlined"
              margin="dense"
            />
            <TextField
              label="メールアドレス"
              value={editingEmail}
              onChange={(e) => setEditingEmail(e.target.value)}
              variant="outlined"
              margin="dense"
            />
            <Button
              onClick={() => handleSave(contact.id)}
              variant="contained"
              color="primary"
            >
              登録
            </Button>
            <Button
              onClick={() => {
                onCancel(contact.id);
                setEditingName(""); // フィールドのリセット
                setEditingEmail(""); // フィールドのリセット
              }}
              variant="outlined"
              color="secondary"
            >
              キャンセル
            </Button>
          </ListItem>
        ) : (
          <ListItem key={contact.id}>
            <ListItemText primary={contact.name} secondary={contact.email} />
          </ListItem>
        )
      )}
    </List>
  );
};

const MainComponent: React.FC = () => {
  const [contacts, setContacts] = useState<TContact[]>([
    {
      id: 1,
      name: "柳沢",
      email: "yanagisawa@ultrasevenstar.com",
      isEditing: false,
    },
  ]);

  const handleAddContact = () => {
    const newContact: TContact = {
      id: contacts.length + 1,
      name: "",
      email: "",
      isEditing: true,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleSaveContact = (
    id: number,
    updatedContact: Omit<TContact, "id" | "isEditing">
  ) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id
          ? { ...contact, ...updatedContact, isEditing: false }
          : contact
      )
    );
  };

  const handleCancelContact = (id: number) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        連絡先一覧
      </Typography>
      <ContactList
        contacts={contacts}
        onSave={handleSaveContact}
        onCancel={handleCancelContact}
      />
      <Box mt={2}>
        <Button onClick={handleAddContact} variant="contained" color="primary">
          連絡先を追加
        </Button>
      </Box>
    </Container>
  );
};

export default MainComponent;
