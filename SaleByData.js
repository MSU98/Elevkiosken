[
    {
      $group: {
        _id: {
          $dateToString: {
            format: "%Y-%m-%d",
            date: "$SaleTimestamp"
          }
        },
        totalSalesByDollar: {
          $sum: "$Price"
        },
        numberOfSales: {
          $sum: 1
        }
      }
    },
    {
      $sort: {
        _id: 1
      }
    }
  ]
  