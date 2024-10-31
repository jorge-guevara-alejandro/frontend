// 'use client';

import { useEffect } from "react";

export const metadata = {
 title: 'Listado de proveedores',
 description: 'SEO Title',
};

export default async function SupplierPage() {

  const todos = await fetch('http://localhost:3002/supplier').then( resp => resp.json());

  // useEffect( () => {
  //   fetch('http://localhost:3002/supplier')
  //     .then( resp => resp.json())
  //     .then(console.log);

  // }, [])

  return (
    <div>
      <h1>Page Supplier</h1>
      {
        JSON.stringify(todos)
      }
    </div>
  );
}