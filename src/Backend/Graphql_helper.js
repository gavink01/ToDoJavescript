// Helper functions for GraphQL queries and mutations
import axios from 'axios';

import { getAccessToken, setupAuthHeaders } from './Auth';

const QUERY_URL = 'https://api.devii.io/query';

// General helper function for executing GraphQL queries and mutations
async function executeGraphqlQuery(query, variables = {}) {
  const payload = {
    query: query,
    variables: variables,
  };

  const headers = await setupAuthHeaders(); // Ensure headers are awaited here
  //   console.log("Headers for the request:", headers); // Check this log

  try {
    const response = await axios.post(QUERY_URL, payload, { headers });
    return response.data;
  } catch (error) {
    console.error('Error executing GraphQL hquery:', error);
    throw error;
  }
}

// Function to retrieve all the list and item data
async function getListData() {
  const ListDataQuery = `
    query
        {
        list {
            listid
            listname
            status_value {
            statusid
            statusname
            }
            item_collection {
            itemid
            itemname
            statusid
            status_value{statusname}
            }
        }
        }
     
    `;
  return executeGraphqlQuery(ListDataQuery);
}


// Mutation functions

const addItem = async (itemName, listId, statusId) => {
  const addItemMutation = `
    mutation ($i: itemInput) {
      create_item(input: $i) {
        itemid
        itemname
        status_value {
          statusname
        }
        list {
          listname
        }
      }
    }`;
  const variables = {
    i: { itemname: itemName, listid: Number(listId), statusid: Number(statusId) }
  };
  return executeGraphqlQuery(addItemMutation, variables);
};

export const addList = async (listName) => {
  const addListMutation = `
    mutation ($i: listInput) {
      create_list(input: $i) {
        listid
        listname
      }
    }`;
  const variables = {
    i: { listname: listName }
  };
  return executeGraphqlQuery(addListMutation, variables);
};

export const deleteItem = async (itemId) => {
  const deleteItemMutation = `
    mutation ($i: ID!) {
      delete_item(itemid: $i) {
        itemid
        itemname
      }
    }`;
  const variables = { i: itemId };
  return executeGraphqlQuery(deleteItemMutation, variables);
};

export const deleteList = async (listId) => {
  const deleteListMutation = `
    mutation ($i: ID!) {
      delete_list(listid: $i) {
        listid
        listname
      }
    }`;
  const variables = { i: listId };
  return executeGraphqlQuery(deleteListMutation, variables);
};


async function editItem(itemId, newName, listId, statusId) {
    const editItemMutation = `
        mutation ($i: itemInput, $j: ID!) {
            update_item(input: $i, itemid: $j) {
                itemid
                itemname
                status_value {
                    statusid
                    statusname
                }
                list {
                    listid
                    listname
                }
            }
        }`;
    const variables = {
        j: itemId,
        i: { itemname: newName, listid: Number(listId), statusid: Number(statusId) }
    };
    return executeGraphqlQuery(editItemMutation, variables);
}



// Export the functions to be used elsewhere in the project
export { getListData,editItem,addItem };
