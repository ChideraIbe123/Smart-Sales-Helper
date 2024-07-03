import torch

model = MyModel()  # Instantiate your model class
model.load_state_dict(torch.load('model_weights.pth'))
model.eval()  # Set the model to evaluation mode if you are doing inference