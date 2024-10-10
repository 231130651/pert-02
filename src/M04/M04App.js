import React, { useEffect, useState } from "react";
import "./M04Style.css";
import dataContacts from "./data_contacts";
import ContactCard from "./ContactCard";

const M04App = () => {
  const [contacts, setContacts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setContacts([...dataContacts]);
      setIsMounted(true);
      return;
    }

    const filterContacts = setTimeout(() => {

      setContacts([
        ...dataContacts.filter((contact) =>
          contact.nama.toLowerCase().includes(keyword.toLowerCase())
        ),
      ]);
    }, 1000);

    return () => {
      clearTimeout(filterContacts);
    };
  }, [keyword]);

  const searchHandler = (e) => {
    setKeyword(e.target.value);
  };

  const [filterType, setFilterType] =
  useState("nama")

  return (
    <div className="container">
      <div className="header">
        <h1>XYZ Ponsel.</h1>
        <input type="text" placeholder="cari..." onChange={searchHandler} />
      </div>
      <div className="filter-option">
        <label>
        Search by:
        nama
            <input
            type="radio"
            name="filter"
            value="nama"
            checked={filterType==="nama"}
            onChange={(e) =>
            setFilterType(e.target.value)}
            />
        </label>
        <label>
            nomor hp
            <input
            type="radio"
            name="filter"
            value="no hp"
            checked={filterType==="nomer_hp"}
            onChange={(e) =>
            setFilterType(e.target.value)}
            />
        </label>
      </div>
      <h2 className="title">Contact List</h2>
      <div className="contact-list">
        {contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.id}
              nama={contact.nama}
              nomor_hp={contact.nomor_hp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default M04App;