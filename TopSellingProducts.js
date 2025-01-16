[
    {
      $group: {
        _id: "$ProductName",
        TotalSold: {
          $sum: "$Quantity"
        }
      }
    },
    {
      $sort: {
        TotalSold: -1
      }
    },
    {
      $limit: 5
    }
  ]
  