[
    {
      $project: {
        _id: 0,
        day: {
          $dateToString: {
            format: "%Y-%m-%d",
            date: "$SaleTimestamp"
          }
        },
        Quantity: 1
      }
    },
    {
      $group: {
        _id: "$day",
        totalSalesByDay: {
          $sum: "$Quantity"
        }
      }
    },
    {
      $group: {
        _id: null,
        uniqueDays: {
          $sum: 1
        },
        totalSales: {
          $sum: "$totalSalesByDay"
        }
      }
    },
    {
      $project: {
        uniqueDays: 1,
        totalSales: 1,
        averageSalesPerDay: {
          $round: [
            {
              $divide: [
                "$totalSales",
                "$uniqueDays"
              ]
            },
            0
          ]
        }
      }
    }
  ]
  