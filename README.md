## Code for generating machine learning ideas using machine learning.

It accompanies [the article](https://towardsdatascience.com/generating-new-ideas-for-machine-learning-projects-through-machine-learning-ce3fee50ec2) where I explain how to generate style specific text using transfer learning on a pre-trained language model.

It uses a pre-trained language model on a small dataset (corpus: one of 2500 sentences of machine learning ideas, the other one of 5000 sentences of philosophy quotes).

Requires
- FastAI v1
- PyTorch v1
- Pandas

### Forked from the original repo, and modified to generate quotes by authors of choice.
Modifications made:
- An npm for scraping GoodReads for quotes by your favourite author/s.
- Saved to a json file, which is read in by the script in the Jupyter Notebook
- Rest of the process is pretty similar to the original repo.
