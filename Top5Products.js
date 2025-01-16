[
    {
      $group: {
        _id: "$ProductName",
        totalQuantitySold: {
          $sum: "$Quantity"
        }
      }
    },
    {
      $sort: {
        totalQuantitySold: -1
      }
    },
    {
      $limit: 5
    }
  ]
  