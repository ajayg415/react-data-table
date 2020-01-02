import React from 'react';

const Address = data => {
  const address = data.row.address || {};
  return `${address.suite || ''}, ${address.street || ''}, ${address.city || ''}`;
}

const Tellno = data => {
  const num = data.row.phone;
  return <a href={`tel:${num}`}>{num}</a>;
}

const Email = data => {
  const email = data.row.email;
  return <a href={`mailto:${email}`}>{email}</a>;
};


export {Address, Tellno, Email};