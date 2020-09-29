type SignInParams = {
  input: {
    email: string;
    password: string;
  };
};

export const resolvers = {
  Mutation: {
    signIn: (_: any, { input }: SignInParams, cache: any) => {
      if (input.email === "a@example.com" && input.password === "password") {
        return authPayLoad;
      }
    },
  },
};

const authPayLoad = {
  account: {
    id: "aa",
    email: "a@example.com",
    name: "show",
    birthday: "2020-08-03",
    createdAt: "2020-09-02",
    updatedAt: "2020-09-03",
  },
  token: "vneianveonoi2",
};
