const { User, Thought } = require('../models');

const resolvers = {
    Query: {

        // GET all users
        users: async () => {
            return User.find()
                .select('-__v -password') // omit users passwords
                .populate('friends')
                .populate('thoughts');
        },
        // GET a user by name
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password') 
                .populate('friends')
                .populate('thoughts');
        },
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 }); // filter thru descending order
        },
        thought: async (parent, { _id }) => {
            return Thought.findOne({ _id });
        }

    }
};

module.exports = resolvers;