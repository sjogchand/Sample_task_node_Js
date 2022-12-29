import React, { useState } from 'react'
import axios from 'axios'
import Modal from '../../ui/modal'
import sucess from '../../../assets/images/sucess.png'
import dltIcon from '../../../assets/images/dlt.png'
const { REACT_APP_BACKEND_API_APP } = process.env

const DeleteProperty = (props) => {
  const { modalId, modalLabel, deleteId, setDeleteSuccess } = props
  const [userDelete, setUserDelete] = useState(false)

  const deleteHandler = (deleteId) => {
    let token = sessionStorage.getItem('accessToken2')
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }

    axios
      .post(
        `http://localhost:1055/api/properties/delete`,
        { id: deleteId },
        config,
      )
      .then(async (res) => {
        setDeleteSuccess(true)
        setUserDelete(!userDelete)
      })
  }

  const userDeleteHandler = () => {
    setUserDelete(!userDelete)
  }

  return (
    <Modal modalId={modalId} modalLabel={modalLabel} className={'dlt-modal'}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body text-center pt-0 ">
            <img
              src={!userDelete ? dltIcon : sucess}
              alt="icon"
              className="m-3"
            />

            {!userDelete && <p className="dlt-hed">Are you sure ?</p>}

            <p className="dlt-body">
              {!userDelete
                ? 'Do you want to delete this record? Once deleted, this action cannot be undone'
                : 'Property Deleted Successfully'}
            </p>
          </div>
          <div className="modal-footer">
            {!userDelete && (
              <button
                type="button"
                className="btn btn-secondary ms-3"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            )}

            {!userDelete ? (
              <button
                type="button"
                className="btn btn-genmeb ms-3"
                onClick={() => deleteHandler(deleteId)}
              >
                Delete
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-genmeb ms-3"
                data-bs-dismiss="modal"
                onClick={userDeleteHandler}
              >
                Ok
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteProperty
