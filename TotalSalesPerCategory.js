[
    {
      $group: {
        _id: "$Category",
        TotalSold: {
          $sum: "$Quantity"
        },
        TotalRevenue: {
          $sum: {
            $multiply: ["$Quantity", "$Price"]
          }
        }
      }
    }
  ]
  