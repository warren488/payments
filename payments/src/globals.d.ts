declare let Stripe: Function;
declare let paypal: {
  Buttons: (obj: {
    createOrder: (
      data: {},
      actions: { order: { create: Function; capture: Function } }
    ) => void;
    onApprove: (
      data: {},
      actions: {
        order: {
          create: {
            purchase_units: [
              {
                amount: {
                  value: string;
                };
              }
            ];
          };
          capture: Function;
        };
      }
    ) => void;
  }) => { render: Function };
};
