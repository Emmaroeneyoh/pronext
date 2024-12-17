

const get = async () => {
    const now = new Date();
  
    // Calculate date ranges
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfToday = new Date(startOfToday);
    endOfToday.setDate(startOfToday.getDate() + 1);
  
    const startOfYesterday = new Date(startOfToday);
    startOfYesterday.setDate(startOfToday.getDate() - 1);
  
    const startOfTomorrow = new Date(endOfToday);
    const endOfTomorrow = new Date(startOfTomorrow);
    endOfTomorrow.setDate(startOfTomorrow.getDate() + 1);
  
    const result = await Interview.aggregate([
      {
        $addFields: {
          category: {
            $switch: {
              branches: [
                {
                  case: {
                    $and: [
                      { $gte: ['$interviewDate', startOfToday] },
                      { $lt: ['$interviewDate', endOfToday] },
                    ],
                  },
                  then: 'today',
                },
                {
                  case: {
                    $and: [
                      { $gte: ['$interviewDate', startOfYesterday] },
                      { $lt: ['$interviewDate', startOfToday] },
                    ],
                  },
                  then: 'yesterday',
                },
                {
                  case: {
                    $and: [
                      { $gte: ['$interviewDate', startOfTomorrow] },
                      { $lt: ['$interviewDate', endOfTomorrow] },
                    ],
                  },
                  then: 'tomorrow',
                },
              ],
              default: null,
            },
          },
        },
      },
      {
        $match: {
          category: { $ne: null }, // Ignore documents not in today, yesterday, or tomorrow
        },
      },
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);
  
    // Transform result to desired format
    const formattedResult = result.reduce((acc, curr) => {
      acc[curr._id] = curr.count;
      return acc;
    }, {});
  
    // Ensure keys for all categories
    return {
      today: formattedResult.today || 0,
      yesterday: formattedResult.yesterday || 0,
      tomorrow: formattedResult.tomorrow || 0,
    };
  }
