export const getCommentsData = async () => {
  return [
    {
      _id: "10",
      user: {
        _id: "gfd",
        name: "John",
        avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
      },
      desc: "Норм статья",
      post: "12",
      parent: "null",
      replyOnUser: "null",
      createdAt: "2023-01-01T00:00:00.000Z",
    },
    {
      _id: "11",
      user: {
        _id: "gfa",
        name: "Сергей",
        avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
      },
      desc: "Хорошо статья",
      post: "12",
      parent: "null",
      replyOnUser: "null",
      createdAt: "2023-01-01T00:00:00.000Z",
    },
  ];
};
