
(define-map deployed-contracts (string (tuple (contract-address principal) (contract-source string) (deploy-time uint))))

(define-public (deploy-contract (contract-name string) (contract-source string))
  (let ((contract-address (contract-deploy contract-source)))
    (map-set deployed-contracts contract-name (tuple contract-address tx-sender contract-source (now)))
    (ok contract-address)
  )
)

(define-read-only (get-contract-source (contract-name string))
  (map-get? deployed-contracts contract-name)
)

(define-read-only (get-contract-deploy-time (contract-name string))
  (match (map-get? deployed-contracts contract-name)
    (Some contract-info) (ok (tuple-get contract-info 2))
    (None) (err "Contract not found")
  )
)

(define-read-only (list-deployed-contracts)
  (map deployed-contracts)
)

(define-read-only (is-contract-deployed (contract-name string))
  (is-some (map-get? deployed-contracts contract-name))
)

(define-public (remove-contract (contract-name string))
  (let ((contract-info (map-get? deployed-contracts contract-name)))
    (match contract-info
      (Some _) (map-remove deployed-contracts contract-name) (ok true)
      (None) (err "Contract not found")
    )
  )
)

(define-public (update-contract-source (contract-name string) (new-source string))
  (match (map-get? deployed-contracts contract-name)
    (Some contract-info)
      (map-set deployed-contracts contract-name (tuple (tuple-get contract-info 0) tx-sender new-source (now)))
      (ok true)
    (None) (err "Contract not found")
  )
)
