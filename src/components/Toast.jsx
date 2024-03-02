export function Toast() {
  
  return <div role="alert" aria-live="assertive" aria-atomic="true" id="myToast">
        <div className="d-flex">
            <div className="toast-body" id="msgToast"></div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
}

