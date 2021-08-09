import { Button } from 'components/button'
import { FC, memo } from 'react'

export const ConfirmActions: FC<IConfirm> = memo(
  ({ onConfirm, onCancel, loading }) => {
    return (
      <div className="row-around w-full mt-10" slot="actions">
        <Button
          icon
          role="cancel"
          className="h-12  w-20 xl:w-40 bg-gray-100 "
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          icon
          className="w-20 xl:w-40 mb-6  h-12  bg-pink-700 text-white "
          role="confirm"
          onClick={onConfirm}
          loading={loading}
        >
          Confirm
        </Button>
      </div>
    )
  }
)
